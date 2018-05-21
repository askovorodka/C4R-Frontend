import { toastr } from 'react-redux-toastr'
import config from 'src/lib/config'

const pollingInterval = config.autoUpdateVersion.checkUpdateInterval
const appBuildNumber = +config.build

export default function init () {
  if (config.isDev) {
    return
  }

  if (config.autoUpdateVersion.isEnabled !== true) {
    return
  }

  fetchBuildNumber()
}

async function fetchBuildNumber () {
  const res = await window.fetch('/v',
    {
      credentials: 'include',
      headers: {
        'Cache-Control': 'no-cache'
      }
    }
  )
  const newBuildNumber = await res.text()

  if (appBuildNumber !== +newBuildNumber) {
    confirmVersionUpdate()
  } else {
    setTimeout(fetchBuildNumber, pollingInterval)
  }
}

function confirmVersionUpdate () {
  const toastrConfirmOptions = {
    onOk: () => window.location.reload(true),
    onCancel: () => {}
  }
  toastr.confirm('New version is avaliable. Reload page?', toastrConfirmOptions)
}

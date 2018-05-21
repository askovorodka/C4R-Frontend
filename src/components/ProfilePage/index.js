import { UserCard } from 'src/components/UserCard'
import './index.scss'

export const ProfilePage = props => (
  <section className='profile-page'>
    <UserCard />
    {props.children}
  </section>
)

# C4R Javascript style guide

В процессе написания.

Мы используем style guide [standart js](https://standardjs.com/)

Eslint на прекоммит 

[Хорошие рекоммендации по стилю](https://nodeguide.ru/doc/felix/style/)

* регулярная проверка на стандарты с standardjs
* использовать propTypes и defaultProps
* биндить методы компонента к this через стрелочные функции, 
то есть использовать в объялвении метода 
handleExpand = (e) => {} вместо this.handleExpand.bind(this) в конструкторе
* использовать декораторы: @translate() и @connect() вместо 
export default connect (mapStateToProps)(App) и тому подобного
* не пробрасывать стрелочные функции через проперти компонента 
onChange={(e) => {name = e.target.value }} а использовать так 
onChange={this.handleChange}

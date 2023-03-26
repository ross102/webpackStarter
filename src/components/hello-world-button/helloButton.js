import "./hello-button.scss";
class HelloButton {
    buttonCssClass = 'hello-world-button';
    render () {
        const button = document.createElement('button');
        button.innerHTML = 'Hello world';
        const body = document.querySelector('body');
        button.classList.add(this.buttonCssClass);
        
        button.onclick = function () {
            const p = document.createElement('p');
            p.innerHTML = "Hello world";
            p.classList.add('Hello-world-text');
            body.appendChild(p);
        }

        body.appendChild(button);

        
    }
}


export default HelloButton;
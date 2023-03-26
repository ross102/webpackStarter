import "./heading.scss";

class Heading {
    buttonCssClass = 'hello-world-button';
    render () {
        const heading = document.createElement('h1');
        heading.innerHTML = 'This is a heading';
        const body = document.querySelector('body');

        body.appendChild(heading);

        
    }
}


export default Heading;
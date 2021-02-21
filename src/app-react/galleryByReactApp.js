const imageData = require('../data/imageData.json');

function genImageURL() {
    imageData.map((item) => {
        item.imageURL = 'assets/images/' + item.fileName;
    });
}

genImageURL();

function getRangeRandom(low, high) {
    return Math.ceil(Math.random() * (high - low) + low);
}

function getDegRandom() {
    return ((Math.random() > 0.5 ? '' : '-')) + Math.ceil(Math.random() * 30);
}

let ImgFigure = React.createClass({
    render: function() {

        let styleObj = {};
        if(this.props.arrange.pos) {
            styleObj = this.props.arrange.pos;
        }
    }
})
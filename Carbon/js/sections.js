export default class Sections {
    constructor() {
        this.sections = null;
    }

    async setSections(){
        var jsonfile = {
            "id" : [
                {
                    "title": "Relu Function",
                    "description": "Relu Description",
                    "link": "relu.html" 
                },
                {
                    "title": "Leaky Relu Function",
                    "description": "Loss Description",
                    "link": "lrelu.html"
                },
                {
                    "title": "Loss Function",
                    "description": "Loss Description",
                    "link": "loss.html"
                },
                {
                    "title": "Linear Reggresion",
                    "description": "Linear Reggresion Description",
                    "link": "lr.html"
                },
                {
                    "title": "MXNET",
                    "description": "MXNET Description",
                    "link": "mxnet.html"
                },
                {
                    "title": "Pytorch",
                    "description": "Loss Description",
                    "link": "pytorch.html"
                },
                {
                    "title": "Supervised Learning",
                    "description": "Supervised Learning Description",
                    "link": "slearning.html"
                },
                {
                    "title": "Unsupervised Learning",
                    "description": "Unsupervised Learning Description",
                    "link": "unlearning.html"
                },
                {
                    "title": "Semi-supervised Learning",
                    "description": "Semi-supervised Learning Description",
                    "link": "sslearning.html"
                },
                {
                    "title": "Reinforced Learning",
                    "description": "Reinforced Learning Description",
                    "link": "rlearning.html"
                }
            ]
        };
        this.sections = jsonfile;
    }
    async getSections(){
        this.setSections();
        return this.sections;
    }
}
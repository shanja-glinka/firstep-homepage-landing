class ModalFormContact extends ModalStruct {

    getLocalStyles() {
        return {
            modalFormcontactWrap: 'modal-formcontact-wrap',
            modalFormcontactEventClose: 'modal-formcontact--event-close',
            modalFormcontactTitle: 'modal-formcontact-title',
            modalFormcontactDescr: 'modal-formcontact-descr',
            modalFormcontactForm: 'modal-formcontact-form',
        }
    }

    getFormcontactWrap() {
        return this.modalElement.querySelector('.' + this.styles.modalFormcontactWrap);
    }

    makeModal() {

        let storyElement = {
            "tagName": "div",
            "class": this.styles.modalFormcontactWrap,
            "children": [
                {
                    "tagName": "div",
                    "class": this.styles.modalFormcontactEventClose
                },
                {
                    "tagName": "div",
                    "class": this.styles.modalFormcontactTitle,
                    "innerText": "Как вам будет удобнее сотрудничать?"
                },
                {
                    "tagName": "div",
                    "class": this.styles.modalFormcontactDescr,
                    "innerText": "вы можете оставить подходящий для вас способ связи и мы ответить в ближайшее время."
                },
                {
                    "tagName": "form",
                    "class": this.styles.modalFormcontactForm,
                    "children": [
                        {
                            "tagName": "input",
                            "type": "text",
                            "placeholder": "Как к вам обращаться?",
                            "required": "required"
                        },
                        {
                            "tagName": "input",
                            "type": "text",
                            "placeholder": "Укажите свой номер телфеона"
                        },
                        {
                            "tagName": "div",
                            "class": this.styles.modalFormcontactDescr,
                            "innerText": "или"
                        },
                        {
                            "tagName": "input",
                            "type": "text",
                            "placeholder": "Укажите свою электронную почту"
                        },
                        {
                            "tagName": "button",
                            "type": "submit",
                            "innerText": "Сотрудничать"
                        }
                    ]
                }
            ]
        };

        this.modalElement.appendChild(_doc.formatToElement(storyElement));

        


        this.modalElement.querySelector('.' + this.styles.modalFormcontactEventClose).addEventListener('click', () => {
            this.storyDesctruct();
        });


        this.animation.animateIn(this.elementCall, this.getFormcontactWrap());

        this.modalElement.querySelector('form').addEventListener('submit', (e) => {
            this.onSubmitEvent(e);
        });
    }


    onSubmitEvent(e) {
        e.preventDefault();

        let form = this.modalElement.querySelector('form');
        let inputs = form.querySelectorAll('input');

        if (!inputs[1].value && !inputs[2].value) {
            _doc.addStyles((!inputs[1].value ? inputs[1] : inputs[1]), {
                'border': '2px solid red'
            });
            return;
        }

        this.destroy();
    }

    storyDesctruct() {
        let timeoutLength = this.animation.animateOut(this.elementCall, this.getFormcontactWrap());


        this.elementCall = null;
        this.onDesctruct = null;
        this.destroy();
    }

    render(callelement) {

        this.elementCall = callelement;
        this.animation = new AnimationSctruct();
        this.animation.setStyles(this.styles);


        this.initRender(() => {

            this.makeModal();

            this.removePreload();

            this.desctructTimeOut = 100;
            this.onDesctruct = () => {
                let timeoutLength = this.animation.animateOut(this.elementCall, this.getFormcontactWrap());

            }

        });

    }

}
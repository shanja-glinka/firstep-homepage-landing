class ModalFieldAnimation extends AnimationSctruct {

    constructor() {
        super();

    }



    /**
     * 
     * @param {Object} params 
     * @param {HTMLElement} params.wrap
     * @param {HTMLElement} params.element
     * @param {Boolean} params.next
     * @param {function} params.onDrawCall
     * @param {Object} params.content
     * @param {number} params.currentPosition
     */
    afterMoveProcess(element, newPosX, newPosY) {

        let parent = element.closest('.' + this.styles.modalFieldContent);

        let posx = null;
        let posy = null;

        let parentRect = parent.getBoundingClientRect();
        let elemRect = element.getBoundingClientRect();

        let outOfRight = newPosX + elemRect.width > parentRect.width;
        let outOfBottom = newPosY + elemRect.height > parentRect.height;


        if (newPosX < 0 && newPosY < 0) {
            posx = posy = 0;
        } else if (newPosX < 0) {
            posx = 0;
        } else if (newPosY < 0) {
            posy = 0;
        }

        if (outOfRight && outOfBottom) {
            posx = parentRect.width - elemRect.width;
            posy = parentRect.height - elemRect.height;
        } else if (outOfRight) {
            posx = parentRect.width - elemRect.width;
        } else if (outOfBottom) {
            posy = parentRect.height - elemRect.height;
        }



        if (posx !== null || posy !== null) {
            _doc.addStyles(element, {
                transition: 'all .2s cubic-bezier(0.7, -0.18, 0.29, 1.36)',
                transform: 'translate(' + (posx === null ? newPosX : posx) + 'px, ' + (posy === null ? newPosY : posy) + 'px)'
            });

            setTimeout(() => {
                _doc.removeStyles(element, 'transition');
            }, 200);
        }
    }

    animateResetMove(storyContainer) {
        setTimeout(() => {
            _doc.addStyles(storyContainer, {
                'transition': 'all 0.3s cubic-bezier(.46,0,0,1.01) 0s',
                'transform': 'translateX(0px)'
            })

            setTimeout(() => {
                _doc.removeStyles(storyContainer, ['transform', 'transition']);
            }, 300);
        }, 50);

        return 350;
    }

}
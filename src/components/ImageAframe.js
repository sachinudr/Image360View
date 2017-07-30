
import React, {
    Component,
} from 'react';

class ImageAframe extends Component {

    handleChange() {
        this.props.setCurrentImage(this.props.index)
    }

    render() {

        return(
            <div>
                { this.props.currentImage && this.props.isLoading===false?
                  <div style={{width:'100%'}}>< a-scene >
                 < a-sky src={this.props.currentImage.pano}
                    rotation="0 -130 0"></a-sky>
                    </a-scene> </div> : <span>Loading</span>
                }
            </div>
        );
    }
}

export default ImageAframe;
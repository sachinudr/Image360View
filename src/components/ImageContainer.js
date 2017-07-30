
import React, {
    Component,
    PropTypes,
} from 'react';

import Image from './Image';

class ImageContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="row">
                {
                    this.props.currentImage ?
                        <Image src={this.props.currentImage.pano} type={this.props.type}/>: <span>No images</span>
                }
            </div>
        );
    }
}

export default ImageContainer;
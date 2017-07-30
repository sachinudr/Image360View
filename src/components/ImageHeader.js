
import React, {
    Component,
} from 'react';

import Image from './Image';

class ImageHeader extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
      this.props.click();
    }

    render() {
        let images = this.props.images.map((image, index) =>
                   <Image key={index}
                          index={index}
                          src={image.pano}
                          name={image.name}
                          type={'thumbnail'}
                          click={this.handleChange}
                          {...this.props}/>
        );
        return(
            <div className="row" style={{zIndex:'-1'}}>
                {
                    images
                }
            </div>
        );
    }
}

export default ImageHeader;
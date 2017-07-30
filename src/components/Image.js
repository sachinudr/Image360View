
import React, {
    Component,
} from 'react';


class Image extends Component {
    handleChange() {
        this.props.setCurrentImage(this.props.index)
        this.props.click();
    }

    render() {
        let src = this.props.src;
        let style = {
            thumbnailDiv: {
                    float:'left',
                    textAlign:'center',
                    marginTop:'0px',
                    marginBottom:'10px',
                    marginLeft:'10px',
                    marginRight:'10px',
                    boxShadow: '0 6px 6px  #999'
            },
            thumbnail: {
                width: 200,
                height: 100
            }, fullsize: {
                width: '100%',
                height: '100%'
            }
        };

        let type = this.props.type;
        return(
            <div className="col-md-2" style={style['thumbnailDiv']}>

                <img src={src}
                     width={style[type].width}
                     style={{zIndex:'-1'}}
                     height={style[type].height}
                     onClick={this.handleChange.bind(this)} />
                <br/>
                {this.props.name}
            </div>
        );
    }
}

export default Image;
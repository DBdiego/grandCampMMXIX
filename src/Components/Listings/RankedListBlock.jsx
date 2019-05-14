import React, {Component} from 'react';
import ListingCard        from '../Cards/ListingCard.jsx'  ;


class RankedListBlock extends Component{

    render(){
    	const title = this.props.title;
    	let List;
    	if (this.props.listing.length > 0){
	    	let ListComponents = (this.props.listing).map(function(element, index){
		          return (<ListingCard
		              key    = {index}

		              rank   = {index + 1}
		              name   = {element.datapoint}

		              number = {element.count}  
		              text   = {'Total Hours'} 
		          />)
		        });
	    	List = (<div className='innerlistContainer'>
						{ListComponents}
					</div>);

    	}else{
    		List = <div><label className = 'noFoundMessage'> {"No one's favorite..."} </label></div>
    	}


        return(
			<div className='RankedListBlock'>
				<div className='titleContainer'>
				 	<label className = 'plotTitle'> {title} </label>
				</div>
				<div className='listContainer'>
					{List}
				</div>
			</div>
    )}
}

export default RankedListBlock

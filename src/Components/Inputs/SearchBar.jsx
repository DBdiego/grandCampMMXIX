import React, {Component} from 'react';
import Select from 'react-select';


class SearchBar extends Component{
    constructor(props) { 
        super(props);

        this.state = {selectedOption:this.props.value}

        this.onChange = this.onChange.bind(this) ; 
    };


    onChange(selectedOption)  {
    	this.setState({selectedOption: selectedOption}); 
      this.props.handleChange(selectedOption);
    };




    render(){
    	//console.log(this.props)
        const options      = this.props.options      ;
        const placeholder  = this.props.placeholder  ;

        const groupStyles = {
          display        : 'flex'          ,
          alignItems     : 'center'        ,
          justifyContent : 'space-between' ,
        };

        const groupBadgeStyles = {
          backgroundColor : '#EBECF0'       ,
          borderRadius    : '2em'           ,
          color           : '#172B4D'       ,
          display         : 'inline-block'  ,
          fontSize        : 12              ,
          fontWeight      : 'normal'        ,
          lineHeight      : '1'             ,
          minWidth        : 1               ,
          padding         : '0.167em 0.5em' ,
          textAlign       : 'center'        ,
        };

        const formatGroupLabel = data => (
          <div style={groupStyles}>
            <span>{data.label}</span>
            <span style={groupBadgeStyles}>{data.options.length}</span>
          </div>
        );



        return(
        	<div className='SearchbarComponent'>
	            <Select className='Select'
	                placeholder  = {placeholder}
	                options      = {options}
	                value        = {this.state.selectedOption}
	                onChange     = {this.onChange}
	                searchable   = {this.props.searchable}
	       			    isMulti      = {this.props.isMulti}
                  isClearable  = {this.props.isClearable}
                  defaultValue = {this.props.defaultValue}
	                formatGroupLabel = {formatGroupLabel}
	            />
            </div>
    )}


}

export default SearchBar

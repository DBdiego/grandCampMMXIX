import React, {Component} from 'react'    ;
import ReactTooltip from 'react-tooltip'  ;
import SearchBar    from './SearchBar.jsx';
import DateInputs   from './DateInputs.jsx';


class StudentClientInput extends Component {
    constructor(props) { 
        super(props);
        this.state = {selectedOption: ''};

        this.FromDateChange = this.FromDateChange.bind(this) ; 
        this.ToDateChange   = this.ToDateChange.bind(this)   ;
        this.handleSearchChange   = this.handleSearchChange.bind(this)   ;
        this.handleSortChange     = this.handleSortChange.bind(this)     ;
        this.handlePageSizeChange = this.handlePageSizeChange.bind(this) ;
    };


    //Change of From-date
    FromDateChange (event){
        //console.log(event.target.value);
        let newFromDateValue = event.target.value;
        if (newFromDateValue === ''){
            newFromDateValue = this.props.dates[0];
        };
        let ChangedFromDate = new Date(newFromDateValue);
        let ChangedToDate   = new Date(this.props.dates[1]);


        //Adapt To-date in case the new From-date is after it
        if (ChangedFromDate > ChangedToDate){
            ChangedToDate = new Date((new Date(newFromDateValue)).getTime() + (7 * 86400000.00));
        }
        let newFromDate = ChangedFromDate.getFullYear() + '-' + (ChangedFromDate.getMonth() + 1) + '-' + ChangedFromDate.getDate();
        let newToDate   = ChangedToDate.getFullYear()   + '-' + (ChangedToDate.getMonth()   + 1) + '-' + ChangedToDate.getDate();

        this.props.doDateChangeHandler(event, newFromDate, newToDate);
    };


    //Change of To-date
    ToDateChange (event){
        let newToDateValue = event.target.value;
        if (newToDateValue === ''){
            newToDateValue = this.props.dates[1];
        };

        let ChangedFromDate = new Date(this.props.dates[0]);
        let ChangedToDate   = new Date(newToDateValue);

        //Adapt From-date in case the new To-date is before it
        if (ChangedFromDate > ChangedToDate){
            ChangedFromDate = new Date((new Date(newToDateValue)).getTime() - (7 * 86400000.00));
        };

        let newFromDate = ChangedFromDate.getFullYear() + '-' + (ChangedFromDate.getMonth()+ 1) + '-' + ChangedFromDate.getDate() ;
        let newToDate   = ChangedToDate.getFullYear()   + '-' + (ChangedToDate.getMonth()  + 1) + '-' + ChangedToDate.getDate()   ;

        this.props.doDateChangeHandler(event, newFromDate, newToDate);

    };


    handleSearchChange(selectedOption){
        if (selectedOption.constructor === Array){
            this.props.SearchChangeHandler(selectedOption);
        };
    };

    handleSortChange(selectedOption){
        if (selectedOption.constructor !== Array){
            this.props.SortChangeHandler(selectedOption);
        }  
    };

    handlePageSizeChange(selectedOption){
        if (selectedOption.constructor !== Array){
            this.props.pageSizeChangeHandler(selectedOption);
        }  
    };

/*
            <div className='DateInputContainer'> 
                <span className='FromText'> 
                    FROM 
                </span>

                <input className = 'DateInputs' 
                       type      = 'date' 
                       id        = 'From_Date' 
                       value     = {this.props.dates[0]} 
                       onChange  = {this.FromDateChange}
                >
                </input>

                <span className='ToText'> TO </span>

                <input className = 'DateInputs' 
                       type      = 'date' 
                       id        = 'To_Date'  
                       style     = {{'marginBottom': '20px'}}
                       value     = {this.props.dates[1]} 
                       onChange  = {this.ToDateChange} 
                >
                </input>
            </div>
*/

    render() {
        return (
        <div className='InputContainer'>
            <DateInputs dates = {this.props.dates}
                        doDateChangeHandler={this.props.doDateChangeHandler}
            />

            <div className='FilterContainer'>
                <div className='SearchTitleContainer'>
                    <p className='FilterTitle'> SEARCH</p>
                    <p className='FilterTitle Asterisc' data-tip data-for='SearchbarToolTip'>?</p>
                </div>
                <SearchBar 
                    placeholder  = {'Find someone ...'}
                    options      = {this.props.searchOptions}
                    handleChange = {this.handleSearchChange}
                    searchable   = {true}
                    isMulti      = {true}
                    isClearable  = {true}
                />
                 <p className='FilterTitle' > SORT </p>
                <SearchBar
                    placeholder  = {'Sort on ...'}
                    value        = {this.props.sortDefault}
                    options      = {this.props.sortOptions}
                    handleChange = {this.handleSortChange}
                    isMulti      = {false}
                    isClearable  = {false}
                    searchable   = {true}
                />
                 <p className='FilterTitle' > PAGE SIZE </p>
                <SearchBar
                    placeholder  = {'How many?'}
                    value        = {this.props.pageSizeDefault}
                    options      = {this.props.pageSizeOptions}
                    handleChange = {this.handlePageSizeChange}
                    isMulti      = {false}
                    isClearable  = {false}
                    searchable   = {true}
                />
            </div>
            <ReactTooltip id        = 'SearchbarToolTip' 
                          className = 'SearchbarToolTip' 
                          effect    = 'solid'
            >
                 <p>Students: Active, Inactive & Exit</p>
                 <p>Clients: All</p>
            </ReactTooltip>
        </div>
        )
    };

};

export default StudentClientInput







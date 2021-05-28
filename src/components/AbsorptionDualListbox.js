import React from 'react';
import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronLeft';

const options = [
	{	label: 'HITRAN 2020',
        disabled: false,
        options: [
    { value: 'h2o', label: 'H2O' },
    { value: 'ch4', label: 'CH4' },
    { value: 'co2', label: 'CO2' },
    { value: 'c2h2', label: 'C2H2' },
    { value: 'c2h4', label: 'C2H4' },
    { value: 'c2h6', label: 'C2H6' },
    { value: 'nh3', label: 'NH3' },
    { value: 'no', label: 'NO' },
    ]
},
{	label: 'HITEMP 2016',
        disabled: false,
        options: [
    { value: 'h2ohitemp', label: 'H2O' },
    { value: 'ch4hitemp', label: 'CH4' },
    { value: 'co2hitemp', label: 'CO2' },
    { value: 'nh3hitemp', label: 'NH3' },
    { value: 'nohitemp', label: 'NO' },
    ]
}
	]


class AbsorptionDualListbox extends React.Component {
    state = {
        selected: ['h2o','co2'],
    };

    onChange = (selected) => {
        this.setState({ selected });
    };

    render() {
        const { selected } = this.state;

        return (
            <DualListBox
            	canFilter
            	showHeaderLabels
                options={options}
                selected={selected}
                onChange={this.onChange}
                icons={{
        moveLeft: "<",
        moveAllLeft: "<<",
        moveRight: ">",
        moveAllRight:">>",
        moveDown: <span className="fa fa-chevron-down" />,
        moveUp: <span className="fa fa-chevron-up" />,
        moveTop: <span className="fa fa-double-angle-up" />,
        moveBottom: <span className="fa fa-double-angle-down" />,
    }}
            />
        );
    }
}

export default AbsorptionDualListbox;
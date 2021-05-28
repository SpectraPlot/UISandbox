import React from "react";

const SpeciesOptions = [
  { label: 'HITRAN 2020',
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
{ label: 'HITEMP 2016',
        disabled: false,
        options: [
    { value: 'h2ohitemp', label: 'H2O' },
    { value: 'ch4hitemp', label: 'CH4' },
    { value: 'co2hitemp', label: 'CO2' },
    { value: 'nh3hitemp', label: 'NH3' },
    { value: 'nohitemp', label: 'NO' },
    ]
}
  ];

export default SpeciesOptions
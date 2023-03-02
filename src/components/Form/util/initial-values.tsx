export interface FormValues {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    position: string;
    agree:boolean;
    radio:boolean,
    mydate:null
}

export const initialValues: FormValues = {
    name: "",
    email: '',
    password: '',
    passwordConfirm: '',
    position: "",
    agree:false,
    radio:false,
    mydate:null
  };



  export interface FormValues2 {
    label:string;
    name:string ;
    checked:boolean;
    subOptions?:Array<{ label: string, name: string }>;
}




  export const initialValues2:FormValues2[] =   [
    {
      label : 'Aggriculture' ,name:'agriculture', checked : false
    },
    {
      label : 'Consumer' ,name:'consumer', checked : false
    },
    {
      label : 'Energy Resources' ,name:'energy_resources', checked : false
    },
    {
      label : 'Financial Services' ,name:'financial_services', checked : false
    },
    {
      label : 'Government' ,name:'government', checked : false
    },
    {
      label : 'Industries' ,name:'industrials', checked : false
    },
    {
      label : 'Real Estate' ,name:'real_estate', checked : false
    },
    {
      label : 'TMT' ,name:'tmt', checked : false
    },
    {
      label : 'Transpotation & Logistics' ,name:'transportation_logistics', checked : false
    },
   
]

export const FormValue3 = {
    agriculture : false,
    consumer : false,  
    energy_resources: false,
    financial_services:false,
    government:false,
    industrials:false,
    real_estate:false,
    tmt:false,
    transportation_logistics:false,
}
//   export default initialValues
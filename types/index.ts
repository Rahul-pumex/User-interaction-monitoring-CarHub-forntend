export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:React.MouseEventHandler<HTMLButtonElement>;
    btnType:"button"|"submit"
}
export interface SearchManufacturerProps{
    manufacturer:string;
    setManuFacturer:(manufacturer:string)=> void 
}



export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }

export interface OptionProps {
    title: string;
    value: string;
  }

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }
  
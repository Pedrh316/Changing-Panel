import React from "react";
import { ItemConfig } from "../App";

export function useItemConfig(){
    return React.useContext(ItemConfig)
}
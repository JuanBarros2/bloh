export interface ToogleProps {
    initialState?: boolean;
}

export interface ToogleReturn {
    state: boolean;
    changeState: () => void;
}



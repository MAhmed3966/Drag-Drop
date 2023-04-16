export interface FormValues {
    [key: string]: string | undefined | null;
}



export interface SearchContextType {
    isLoggedIn: {
        loggedIn: boolean;
        loggedInUser: string;
    };
    selectedFile: any[]; // Replace any with the appropriate type
    query: string;
    image: any[]; // Replace any with the appropriate type
    result: boolean;
    information: {
        title: string;
        description: string;
    };
    showModal: {
        openState: boolean;
        currentFile: string;
    };
}

type SetLoaderFunction = (loader: boolean) => void;

export interface LoaderType {
    loader: boolean;
    setLoader: SetLoaderFunction;
}
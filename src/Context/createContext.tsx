import { createContext } from "react";
import { SearchContextType } from "../Interfaces/interfaces";

type AppContextType = {
  isLoggedIn: {
    loggedIn: boolean;
    loggedInUser: string;
  };
  selectedFile: any[];
  query: string;
  image: any[];
  result: boolean;
  information: {
    title: string;
    description: string;
  };
  showModal: {
    openState: boolean;
    currentFile: string;
  };
  setIsLoggedIn: (login: { loggedIn: boolean; loggedInUser: string }) => void;
  setSelectedFile: React.Dispatch<React.SetStateAction<any[]>>;
  setQuery: (query: string) => void;
  setImage: (image: any[]) => void;
  setResult: (result: boolean) => void;
  setInformation: (information: { title: string; description: string }) => void;
  setShowModal: (showModal: {
    openState: boolean;
    currentFile: string;
  }) => void;
};

export const SearchContext = createContext<AppContextType>({
  isLoggedIn: { loggedIn: false, loggedInUser: "" },
  selectedFile: [],
  query: "Mountain",
  image: [],
  result: false,
  information: { title: "", description: "" },
  showModal: { openState: false, currentFile: "" },
  setIsLoggedIn: () => {},
  setSelectedFile: () => {},
  setQuery: () => {},
  setImage: () => {},
  setResult: () => {},
  setInformation: () => {},
  setShowModal: () => {},
});

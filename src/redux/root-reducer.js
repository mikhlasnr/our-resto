// import depedencies
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // get local storage

// import reducer
import pesananReducer from "./pesanan/pesanan.reducer";
import pesananUtilsReducer from "./pesananUtils/pesananUtils.reducer";
import listPesananReducer from "./listPesanan/listPesanan.reducer";
import userReducer from "./user/user.reducer";
import userByIdReducer from "./userById/userById.reducer";
import rolesReducer from "./roles/roles.reducer";
import pegawaiReducer from "./pegawai/pegawai.reducer";
import MenuReducer from "./menu/menu.reducer";
import MenuByIdReducer from "./menuById/menuById.reducer";
import kategoriMenuReducer from "./kategoriMenu/kategoriMenu.reducer";
import detailPesananReducer from "./detailPesanan/detailPesanan.reducer";

//create persist config
// its persist with local storage so when refresh the data won't disappeared
// in this case we persist cart reducer
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "pesanan"],
};

const rootReducer = combineReducers({
  pesanan: pesananReducer,
  pesananUtils: pesananUtilsReducer,
  listPesanan: listPesananReducer,
  detailPesanan: detailPesananReducer,
  user: userReducer,
  roles: rolesReducer,
  pegawai: pegawaiReducer,
  userById: userByIdReducer,
  menu: MenuReducer,
  menuById: MenuByIdReducer,
  kategoriMenu: kategoriMenuReducer,
});

export default persistReducer(persistConfig, rootReducer);

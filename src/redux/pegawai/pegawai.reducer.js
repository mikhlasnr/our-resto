import PegawaiActionTypes from "./pegawai.types";

const INITIAL_STATE = {
  isEmailExist: false,
  showModalAddPegawai: false,
  showModalUpdatePegawai: false,
  showModalDeletePegawai: false,
  inputProfile: null,
  isUploading: false,
};

const pegawaiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PegawaiActionTypes.IS_EMAIL_EXIST:
      return {
        ...state,
        isEmailExist: action.payload,
      };

    case PegawaiActionTypes.TOGGLE_SHOW_MODAL_ADD_PEGAWAI:
      return {
        ...state,
        showModalAddPegawai: !state.showModalAddPegawai,
      };

    case PegawaiActionTypes.TOGGLE_SHOW_MODAL_UPDATE_PEGAWAI:
      return {
        ...state,
        showModalUpdatePegawai: !state.showModalUpdatePegawai,
      };
    case PegawaiActionTypes.TOGGLE_SHOW_MODAL_DELETE_PEGAWAI:
      return {
        ...state,
        showModalDeletePegawai: !state.showModalDeletePegawai,
      };
    case PegawaiActionTypes.SET_INPUT_PROFILE:
      return {
        ...state,
        inputProfile: action.payload,
      };
    case PegawaiActionTypes.REMOVE_INPUT_PROFILE:
      return {
        ...state,
        inputProfile: null,
      };
    case PegawaiActionTypes.TOGGLE_IS_UPLOADING:
      return {
        ...state,
        isUploading: !state.isUploading,
      };
    default:
      return state;
  }
};

export default pegawaiReducer;

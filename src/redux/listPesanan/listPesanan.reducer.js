import ListPesananActionTypes from "./listPesanan.types";

const INITIAL_STATE = {
  dataListPesanan: [],
  dataPesanan: null,
  isFetching: false,
  errorMessage: null,
  isUploading: false,
  listPesananModalHidden: true,
  listPesananDeleteModalHidden: true,
  listPesananLihatModalHidden: true,
  modalUpdateStatusMasakHidden: true,
  modalBayarHidden: true,
  modalDetailPesananHidden: true,
  modalStrukHidden: true,
};

const listPesananReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // *====START HANDLING DATA LIST PESANAN====
    case ListPesananActionTypes.FETCH_LIST_PESANAN_START:
      return {
        ...state,
        isFetching: true,
      };
    case ListPesananActionTypes.FETCH_LIST_PESANAN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataListPesanan: action.payload,
      };
    case ListPesananActionTypes.FETCH_LIST_PESANAN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    case ListPesananActionTypes.REMOVE_LIST_PESANAN:
      return {
        ...state,
        dataListPesanan: [],
      };
    // *====END HANDLING DATA LIST PESANAN====
    // *====START HANDLING DATA PESANAN====
    // for handling update
    case ListPesananActionTypes.SET_DATA_PESANAN:
      return {
        ...state,
        dataPesanan: action.payload,
      };
    case ListPesananActionTypes.REMOVE_DATA_PESANAN:
      return {
        ...state,
        dataPesanan: null,
      };
    // *====END HANDLING DATA PESANAN====

    // *====START HANDLING MODAL====
    // Dashboard Pelayan
    case ListPesananActionTypes.TOGGLE_LIST_PESANAN_MODAL_HIDDEN:
      return {
        ...state,
        listPesananModalHidden: !state.listPesananModalHidden,
      };
    case ListPesananActionTypes.TOGGLE_LIST_PESANAN_DELETE_MODAL_HIDDEN:
      return {
        ...state,
        listPesananDeleteModalHidden: !state.listPesananDeleteModalHidden,
      };
    case ListPesananActionTypes.TOGGLE_LIST_PESANAN_LIHAT_MODAL_HIDDEN:
      return {
        ...state,
        listPesananLihatModalHidden: !state.listPesananLihatModalHidden,
      };

    // Dashboard Koki
    case ListPesananActionTypes.TOGGLE_MODAL_UPDATE_STATUS_MASAK_HIDDEN:
      return {
        ...state,
        modalUpdateStatusMasakHidden: !state.modalUpdateStatusMasakHidden,
      };
    // Dashboard Kasir
    case ListPesananActionTypes.TOGGLE_MODAL_DETAIL_PESANAN_HIDDEN:
      return {
        ...state,
        modalDetailPesananHidden: !state.modalDetailPesananHidden,
      };
    case ListPesananActionTypes.TOGGLE_MODAL_BAYAR_HIDDEN:
      return {
        ...state,
        modalBayarHidden: !state.modalBayarHidden,
      };
    case ListPesananActionTypes.TOGGLE_MODAL_STRUK_HIDDEN:
      return {
        ...state,
        modalStrukHidden: !state.modalStrukHidden,
      };
    // *====END HANDLING MODAL====
    // *====START HANDLING UTILS====

    case ListPesananActionTypes.TOGGLE_IS_UPLOADING_LIST_PESANAN:
      return {
        ...state,
        isUploading: !state.isUploading,
      };
    // *====END HANDLING UTILS====

    default:
      return state;
  }
};

export default listPesananReducer;

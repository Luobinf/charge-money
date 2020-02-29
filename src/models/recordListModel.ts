const localStorageKeyName = 'recordList';
const recordListModel = {
  getData() {
    return JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem [];
  },
  saveData(data: RecordItem []) {
    return window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export default recordListModel;

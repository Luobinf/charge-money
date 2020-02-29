const localStorageKeyName = 'tagList';
type TagListModel = {
  data: string[],
  getData: () => string[],
  saveData: () => void,
  create: (name: string) => 'success' | 'duplicated' // 联合类型
}
const tagListModel: TagListModel = {
  data: [],
  getData() {
    this.data = JSON.parse(window.localStorage.getItem('recordList') || '[]');
    return this.data;
  },
  create(name:string) {
    if(this.data.indexOf(name) >= 0) {
      return 'duplicated'
    }
    this.data.push(name);
    this.saveData();
    return 'success';
  },
  saveData() {
    return window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};

export default tagListModel;

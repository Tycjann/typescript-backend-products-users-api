export interface BaseRepository<K> {
  getAllItems(): Array<K>;
  getItemById(id: string): K;
  addItem(item: K): K;
  updateItem(id: string, item: K): K;
  deleteItem(id: string): boolean;
}
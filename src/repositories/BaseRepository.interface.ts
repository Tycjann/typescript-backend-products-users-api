export interface BaseRepository {
  addItem(item);
  deleteItem(id: string): boolean;
  updateItem(id: string, item);
  getItemById(id: string);
  getAllItems();
}
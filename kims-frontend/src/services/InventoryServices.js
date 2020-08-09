import GenericService from './GenericServices';
class InventoryService extends GenericService {
	constructor() {
		super();
	}
	addinventory = (data) => this.post('inventory/post', data);
	deleteinventory = (_id) => this.delete('inventory/' + _id);
	updateinventory = (_id, data) => this.put('inventory/' + _id, data);
	getinventory = () => this.get('inventory');
	getSingleinventory = (id) => this.get('inventory/' + id);
}

let inventoryService = new InventoryService();
export default inventoryService;
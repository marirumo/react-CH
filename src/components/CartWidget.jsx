
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faBagShopping} className="text-white hover:bg-gray-700 hover:text-gray-300 px-3 py-3 rounded-md text-sm font-medium" />
    </div>
  );
}

export default CartWidget
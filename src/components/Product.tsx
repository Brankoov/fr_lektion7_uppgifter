export interface ProductProps {
    name: string;
    price: number;
    isOnSale: boolean;
  }
  
  export function Product({ name, price, isOnSale }: ProductProps) {
    return (
      <div>
        <h2>{name}</h2>
        <p>Pris: {price} kr</p>
        {isOnSale && <p>På rea!</p>}
      </div>
    );
  }

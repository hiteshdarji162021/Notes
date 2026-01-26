class EComm {
    search(name: string, color: string): string[];
    search(name: string, price: number): string[];
    search(name: string, price: number, seller: string): string[];
    search(name: string, price: number, seller: string, zip: number): string[];
    search(name: string, color: string, seller: string, zip: number): string[];


    search(name: string, colorOrPrice: string | number, seller?: string, zip?: number): string[] {

        console.log('searhing the product.....');
        console.log(`${name} - ${colorOrPrice}, - ${seller} - ${zip}`);
        return ['macbook pro', 'imac', 'ipad'];
    }
}

let ec = new EComm();
ec.search('macbook pro', 'white');
ec.search('apple', 1000);
ec.search('imac', 400, 'amazon');
ec.search('canon', 500, 'amazon', 90900);
ec.search('Apple', 'black', 'flipkart', 989898);
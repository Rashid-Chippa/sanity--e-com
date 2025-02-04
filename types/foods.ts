export interface Food {
    _id: string;
    name: string;
    _type : "food";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
};
quantity : number;
description? :string;
}


export interface Chef {
    _id: string;
    name: string;
    _type : "chef";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
};
experience : number;
description? :string;
slug : {
    _type : "slug";
    current : string;
}, 
inventory : number ;
}
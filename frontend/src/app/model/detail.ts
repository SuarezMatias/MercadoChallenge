export interface Detail {
    id: string;
    site_id: string;
    title: string;
    subtitle?: any;
    seller_id: number;
    category_id: string;
    official_store_id?: any;
    price: number;
    base_price: number;
    original_price?: number;
    currency_id: string;
    initial_quantity: number;
    available_quantity: number;
    sold_quantity: number;
    sale_terms: SaleTerm[];
    buying_mode: string;
    listing_type_id: string;
    start_time: Date;
    stop_time: Date;
    condition: string;
    permalink: string;
    thumbnail_id: string;
    thumbnail: string;
    secure_thumbnail: string;
    pictures: Picture[];
    video_id?: any;
    descriptions: any[];
    accepts_mercadopago: boolean;
    non_mercado_pago_payment_methods: any[];
    shipping: Shipping;
    international_delivery_mode: string;
    seller_address: SellerAddress;
    seller_contact?: any;
    location: any;
    coverage_areas: any[];
    attributes: Attribute[];
    warnings: any[];
    listing_source: string;
    variations: Variation[];
    status: string;
    sub_status: any[];
    tags: string[];
    warranty: string;
    catalog_product_id?: any;
    domain_id: string;
    parent_item_id?: any;
    differential_pricing?: any;
    deal_ids: any[];
    automatic_relist: boolean;
    date_created: Date;
    last_updated: Date;
    health: number;
    catalog_listing: boolean;
    channels: string[];
}

export interface ItemStruct {
    number: number;
    unit: string;
}

export interface Value {
    id: string;
    name: string;
    struct: ItemStruct;
}

export interface SaleTerm {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    value_struct?: ItemStruct;
    values: Value[];
}

export interface ItemValue {
    id: string;
    name: string;
}

export interface Picture {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
}

export interface Shipping {
    mode: string;
    methods: any[];
    tags: string[];
    dimensions?: any;
    local_pick_up: boolean;
    free_shipping: boolean;
    logistic_type: string;
    store_pick_up: boolean;
}


export interface SearchLocation {
    city: ItemValue;
    state: ItemValue;
}

export interface SellerAddress {
    city: ItemValue;
    state: ItemValue;
    country: ItemValue;
    search_location: SearchLocation;
    id: number;
}

export interface Attribute {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    value_struct: ItemStruct;
    values: Value[];
    attribute_group_id: string;
    attribute_group_name: string;
}

export interface AttributeCombination {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    value_struct?: any;
    values: Value[];
}

export interface Variation {
    id: any;
    price: number;
    attribute_combinations: AttributeCombination[];
    available_quantity: number;
    sold_quantity: number;
    sale_terms: any[];
    picture_ids: string[];
    catalog_product_id?: any;
}




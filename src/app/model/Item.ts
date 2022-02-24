
export interface Search {
    site_id: string,
    country_default_time_zone: string,
    query: string,
    paging: Paging,
    results: Result[],
    sort: ItemValue,
    availables_sorts: ItemValue[],
    filters: ItemFilter[];
    available_filters: ItemAvailableFilter[];
}

export interface ItemValue {
    id: string,
    name: string,
    results?: number,
}

export interface ItemFilter {
    id: string,
    name: string,
    type: string
    values: ItemFilterValue[]
}

export interface ItemFilterValue {
    id: string,
    name: string,
    path_from_root: ItemValue[]
}


export interface ItemAvailableFilter extends ItemValue {   
    id: string,
    name: string,
    type: string,
    values?: ItemValue[],     
}

export interface Paging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
}

export interface Result {
    id: string;
    site_id: string;
    title: string;
    seller: Seller;
    price: number;
    prices: Prices;
    sale_price?: any;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: Date;
    condition: string;
    permalink: string;
    thumbnail: string;
    thumbnail_id: string;
    accepts_mercadopago: boolean;
    installments: Installments;
    address: Address;
    shipping: Shipping;
    seller_address: SellerAddress;
    attributes: Attribute[];
    original_price?: any;
    category_id: string;
    official_store_id?: any;
    domain_id: string;
    catalog_product_id?: any;
    tags: string[];
    order_backend: number;
    use_thumbnail_id: boolean;
    offer_score?: any;
    offer_share?: any;
    match_score?: any;
    winner_item_id?: any;
    melicoin?: any;
}

export interface Attribute {
    name: string;
    value_id: string;
    attribute_group_id: string;
    attribute_group_name: string;
    id: string;
    value_struct?: any;
    values: AttributeValue[];
    source: any;
    value_name: string;
}

export interface AttributeValue {
    name: string,
    struct: any,
    source: string,
    id: any
}

export interface SellerAddress {
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: ItemValue;
    state: ItemValue;
    city: ItemValue;
    latitude: string;
    longitude: string;
}

export interface Shipping {
    free_shipping: boolean,
    mode: string,
    tags: string[],
    logistic_type: string,
    store_pick_up: boolean
}

export interface Address {
    state_id: string,
    state_name: string,
    city_id: string,
    city_name: string
}

export interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
}

export interface Prices {
    id: string;
    prices: Price[];
    presentation: Presentation;
    payment_method_prices: any[];
    reference_prices: ReferencePrice[];
    purchase_discounts: any[];
}

export interface Presentation {
    display_currency: string;
}

export interface ReferencePrice {
    id: string;
    type: string;
    conditions: Condition;
    amount: number;
    currency_id: string;
    exchange_rate_context: string;
    tags: any[];
    last_updated: Date;
}

export interface Price {
    id: string;
    type: string;
    amount: number;
    regular_amount?: any;
    currency_id: string;
    last_updated: Date;
    conditions: Condition;
    exchange_rate_context: string;
    metadata: any;
}

export interface Condition {
    context_restrictions: any[];
    start_time: Date;
    end_time: Date;
    eligible: boolean;
}

export interface Seller {
    id: number;
    permalink: string;
    registration_date: Date;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags: string[];
    seller_reputation: SellerReputation;
}

export interface SellerReputation {
    power_seller_status: string;
    real_level: string;
    level_id: string;
    protection_end_date: Date;
    metrics: Metrics;
    transactions: Transactions;
}

export interface Metrics {
    cancellations: Metric,          
    claims: Metric,             
    delayed_handling_time: Metric,            
    sales: Sale
}

export interface Metric {
    excluded: {
        real_value: number,
        real_rate: number
    },
    period: string,
    rate: number,
    value: number
}

export interface Sale {
    period: string,
    completed: number
}

export interface Transactions {
    canceled: number;
    period: string;
    total: number;
    ratings: Ratings;
    completed: number;
}

export interface Ratings {
    negative: number;
    neutral: number;
    positive: number;
}

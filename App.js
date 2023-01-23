import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *  - Logo
 *  - Nav Items (right side)
 *  - Cart
 *
 * Body
 *  - Search bar
 *  - Restaurant List
 *      - RestaurantCards
 *          - Image
 *          - Name
 *          - Rating
 *          - Cusines
 *
 * Footer
 *  - Links
 *  - Copyright
 *
 */
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://yt3.googleusercontent.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      alt="logo"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '452378',
      name: 'Eighteen Calories',
      uuid: '8060c122-ec72-463d-88ac-b2031461ba8f',
      city: '55',
      area: 'MP Nagar',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'djhusujd0iofgqiikedp',
      cuisines: ['Beverages', 'Salads', 'Fast Food', 'Snacks', 'Indian'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 46,
      minDeliveryTime: 46,
      maxDeliveryTime: 46,
      slaString: '46 MINS',
      lastMileTravel: 3.5999999046325684,
      slugs: {
        restaurant: 'eighteen-calories-new-market-new-market',
        city: 'bhopal',
      },
      cityState: '55',
      address: 'RAKASH TARUN PUSHKAR NEAR VISHAL FITNESS PLANT BHOPAL',
      locality: 'PRAKASH TARUN PUSHKAR NEW MARKET',
      parentId: 272130,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹80 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹80 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '3.5 kms',
      hasSurge: false,
      sla: {
        restaurantId: '452378',
        deliveryTime: 46,
        minDeliveryTime: 46,
        maxDeliveryTime: 46,
        lastMileTravel: 3.5999999046325684,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '526209',
      name: 'Eggs On Wheels',
      uuid: 'e371307d-3daa-43b1-a60a-c3f1a43fdf81',
      city: '55',
      area: 'Geetanjali complex',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'bwn3w3jqlgfvbkxrcg2l',
      cuisines: ['Street Food'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 40,
      minDeliveryTime: 40,
      maxDeliveryTime: 40,
      slaString: '40 MINS',
      lastMileTravel: 5.699999809265137,
      slugs: {
        restaurant: 'eggs-on-wheels-mp-nagar-mp-nagar',
        city: 'bhopal',
      },
      cityState: '55',
      address:
        ' second number gate , first building , Block 13,  13/7, Geetanjali complex, South T.T. Nagar,Bhopal. Pin 462003',
      locality: 'MP Nagar',
      parentId: 317124,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹80 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹80 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '5.6 kms',
      hasSurge: false,
      sla: {
        restaurantId: '526209',
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        lastMileTravel: 5.699999809265137,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '600237',
      name: 'THE CAKE CORNER',
      uuid: '69a8cda8-fe20-40f8-baed-2049ced4b4c6',
      city: '55',
      area: 'PIPLANI BHOPAL',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'ttfzrmbmh16omexznjqw',
      cuisines: ['Bakery'],
      tags: [],
      costForTwo: 19900,
      costForTwoString: '₹199 FOR TWO',
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: '34 MINS',
      lastMileTravel: 3.799999952316284,
      slugs: {
        restaurant: 'cake-cafe-mp-nagar-mp-nagar',
        city: 'bhopal',
      },
      cityState: '55',
      address:
        'Shop no 5/A BHAGAT SINGH MARKET  INDRAPURI, Bhopal, Bhopal, Bhopal,  Madhya Pradesh - 462022',
      locality: 'MP Nagar',
      parentId: 206240,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '3.7 kms',
      hasSurge: false,
      sla: {
        restaurantId: '600237',
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 3.799999952316284,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE_WITH_BANNER',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '368159',
      name: 'Indori Famous Utsav Poha',
      uuid: 'f607fbd0-352c-4e1e-a127-e35a27b3266b',
      city: '55',
      area: 'Maharana Pratap Nagar',
      totalRatingsString: '50+ ratings',
      cloudinaryImageId: 'g6batgthaayfrzawrg2u',
      cuisines: ['Street Food', 'Indian', 'Snacks'],
      tags: [],
      costForTwo: 10000,
      costForTwoString: '₹100 FOR TWO',
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: '30 MINS',
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: 'indori-famous-utsav-poha-mp-nagar-mp-nagar',
        city: 'bhopal',
      },
      cityState: '55',
      address:
        'Indori Famous Utsav poha awam chai nashta near anand namkeen, Mp Nagar Zone 2, Bhopal . 462011',
      locality: 'MP Nagar',
      parentId: 106989,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹80 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹80 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '1.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '368159',
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE_WITH_BANNER',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.6',
      totalRatings: 50,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '548429',
      name: 'Subway',
      uuid: 'c2a03482-876e-452a-98ea-d960a94a5114',
      city: '55',
      area: 'Bairagarh',
      totalRatingsString: '100+ ratings',
      cloudinaryImageId: 'qosppj0qef1suqfjgmdf',
      cuisines: ['Fast Food', 'Snacks'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 50,
      minDeliveryTime: 45,
      maxDeliveryTime: 55,
      slaString: '45-55 MINS',
      lastMileTravel: 9.899999618530273,
      slugs: {
        restaurant: 'subway-bairagarh-bairagarh',
        city: 'bhopal',
      },
      cityState: '55',
      address:
        'Shop No 10,11, Alark Square, Nayapura, Lalghati,Bhopal   462001',
      locality: 'Stc Palm Square',
      parentId: 2,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹80 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹80 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: false,
        nextOpenMessage: 'Opens next at 11 am, today',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '9.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '548429',
        deliveryTime: 50,
        minDeliveryTime: 45,
        maxDeliveryTime: 55,
        lastMileTravel: 9.899999618530273,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE_WITH_BANNER',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '4.1',
      totalRatings: 100,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '606880',
      name: 'The Brooklyn Creamery - Healthy Ice Cream',
      uuid: 'd1e50f25-3916-48a2-a393-d9b23d244eb2',
      city: '55',
      area: 'Saraswati Nagar',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'blxnr9mmc8setx20osjz',
      cuisines: ['Desserts', 'Ice Cream'],
      tags: [],
      costForTwo: 20000,
      costForTwoString: '₹200 FOR TWO',
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: '33 MINS',
      lastMileTravel: 5.800000190734863,
      slugs: {
        restaurant:
          'the-brooklyn-creamery-healthy-ice-cream-saraswati-nagar-mp-nagar',
        city: 'bhopal',
      },
      cityState: '55',
      address:
        'KDs Cafe & Restro, S-12, Jawahar Chowk, Saraswati Nagar, Bhopal, Madhya Pradesh 462003',
      locality: 'Jawahar Chowk',
      parentId: 236673,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '50% off',
        shortDescriptionList: [
          {
            meta: '50% off | Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹80 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '50% OFF',
        shortDescriptionList: [
          {
            meta: 'Use WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '50% off up to ₹80 | Use code WELCOME50',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: '',
        title: '',
        amount: '',
        icon: '',
      },
      availability: {
        opened: false,
        nextOpenMessage: 'Opens next at 12 noon, today',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '5.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '606880',
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 5.800000190734863,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
];

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, area }) => {
  return (
    <div className="card">
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          cloudinaryImageId
        }
        alt={name}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{area} </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant?.data?.id} {...restaurant?.data} />
        );
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);

export default AppLayout;

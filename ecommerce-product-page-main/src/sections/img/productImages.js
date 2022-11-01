import ProdImg1 from '@images/image-product-1.jpg';
import ProdImg2 from '@images/image-product-2.jpg';
import ProdImg3 from '@images/image-product-3.jpg';
import ProdImg4 from '@images/image-product-4.jpg';
import ProdImgThumbnail1 from '@images/image-product-1-thumbnail.jpg';
import ProdImgThumbnail2 from '@images/image-product-2-thumbnail.jpg';
import ProdImgThumbnail3 from '@images/image-product-3-thumbnail.jpg';
import ProdImgThumbnail4 from '@images/image-product-4-thumbnail.jpg';

const prodImages = [
    ProdImg1,
    ProdImg2,
    ProdImg3,
    ProdImg4
];

const thumbnailImages = [
    ProdImgThumbnail1,
    ProdImgThumbnail2,
    ProdImgThumbnail3,
    ProdImgThumbnail4
];

const imageDataArr = prodImages.map((img, index) => { return { url: img, thumbnailUrl: thumbnailImages[index] }; });

export default imageDataArr;

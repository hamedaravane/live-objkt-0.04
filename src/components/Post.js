import React from 'react';
import '../components/Post.css';

const Post = ({data}) => {

        function creator() {
            let creator = 'unknown'
            if (data.creator) {
                creator = data.creator.address
                if (data.creator.alias) {
                    creator = data.creator.alias
                }
            }
            if (creator.length > 15) {
                creator = creator.substr(0, 3) + '...' + creator.substr(-3, 3)
            }
            return creator;
        }

        function getImage() {
            let ipfs = data.token.artifact_uri
            if (data.token.display_uri) {
                ipfs = data.token.display_uri
            }
            if (data.token.thumbnail_uri) {
                ipfs = data.token.thumbnail_uri
            }
            let imageUri = '';
            if (ipfs) {
                imageUri = ipfs.replace("ipfs://", "https://ipfs.io/ipfs/")
            }
            return imageUri;
        }

        function royaltyCalc() {
            let royalty = 0;
            if (data.token.royalties[0]) {
                royalty = (data.token.royalties[0].amount / 10 ** data.token.royalties[0].decimals) * 100
            }
            royalty = Math.round(royalty)

            return royalty + '%'
        }

        function getLink() {
            let url = 'https://objkt.com/asset'
            url = url + '/' + data.fa_contract + '/' + data.token.token_id
            if (data.fa.name === 'hic et nunc') {
                url = 'https://hic.af/o/' + data.token.token_id
            }
            if (data.marketplace.name === 'fxhash marketplace v1') {
                url = 'https://www.fxhash.xyz/gentk/' + data.token.token_id
            }
            return url
        }

        function priceCalc() {
            let price = ''
            if (data.price) {
                price = data.price / 1000000 + ' tz'
            }
            return price
        }

        function getMarketplace() {
            let marketPlace = ''
            if (data.marketplace.name) {
                switch (data.marketplace.name) {
                    case 'teia marketplace v1':
                        marketPlace = "TEIA";
                        break;
                    case 'objktcom marketplace v4':
                        marketPlace = "OBJKT";
                        break;
                    case 'fxhash marketplace v1':
                        marketPlace = "FXHASH";
                        break;
                    case 'Versum Items':
                        marketPlace = "Versum";
                        break;
                    case 'KALAM':
                        marketPlace = "kalamint";
                        break;
                    default:
                        marketPlace = data.marketplace.name;
                }
            }

            return marketPlace;
        }

        return (
            <div className='objkt'>
                <a href={getLink()} target="_blank" rel="noopener noreferrer">
                    <img className='image' src={getImage()}/>
                </a>
                <div className='info'>
                    <p>{creator()}</p>
                    <p>{data.token.supply} ed.</p>
                </div>
                <div className='info'>
                    <p>Price: {priceCalc()}</p>
                    <p>Royalty: {royaltyCalc()}</p>
                </div>
                <div className='info'>
                    <p>{getMarketplace()}</p>
                </div>
            </div>
        );
    }
;

export default Post;
import cx from 'classnames';

export default function(props, children) {
	let size;
	if (children.length === 2) {
		size = 'pair';
	}
	else if (children.length % 3 === 0) {
		size = children.length % 2 === 0 ? 'three-even' : 'three';
	}
	return (
		<div class={cx('photo-grid', size && `photo-grid_${size}`)}>
			{children.map(photo => {
				if (photo.type === 'img') {
					photo.attrs.class = 'photo-grid__img';
					return <div class="photo-grid__photo">{photo}</div>;
				}
				photo.attrs.class = 'photo-grid__photo';
				photo.children[0].attrs.class = 'photo-grid__img';
				return photo;
			})}
		</div>
	);
}
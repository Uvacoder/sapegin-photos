import cx from 'classnames';
import PostMeta from './PostMeta';

export default function($, children) {
	const { title, content, excerpt, tags, url, more } = $.post;
	const { safe, typo, typoTitle, __ } = $;
	let text = excerpt || content;

	// Move first photo in photo post before title
	const isPhoto = tags.includes('photos');
	let firstPhoto;
	if (isPhoto) {
		firstPhoto = text.match(/<figure class="entry-photo">[\S\s]*?<\/figure>/);
		if (firstPhoto) {
			text = text.replace(firstPhoto, '');
		}
	}

	return (
		<article class={cx('essay', 'entry', { essay_photo: isPhoto })}>
			<div class="content">
				<header>
					<h2 class={cx('entry-title', 'entry-title_excerpt' + (isPhoto ? '-photo' : ''))}>
						<a class="entry-title__link" href={url}>
							{isPhoto && firstPhoto &&
								<div class="essay__featured">{safe(firstPhoto)}</div>
							}
							{typoTitle(title)}
						</a>
					</h2>
				</header>

				<div class="essay__content text">
					{typo(text)}
					{more &&
						<u-cut>
							<p class="more-link">
								<a class="more-link__link js-more-link" href={url}>{__('readMore')}</a>
							</p>
							<div class="js-more-content is-hidden">{typo(more)}</div>
						</u-cut>
					}
				</div>

				<PostMeta {...$} />
			</div>
		</article>
	);
}

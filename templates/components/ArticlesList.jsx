import block from 'bem-cn';

const b = block('articles-list');

export default ({ list, cols, markImportant, typo }) => (
	<ul class={b({ cols })}>
		{list.map(link => (
			<li class={b('item')({ important: link.important && markImportant })}>
				<a href={link.link} class="link">
					{typo(link.label)}
				</a>
				{link.description &&
					<div class={b('description')}>{typo(link.description)}</div>
				}
			</li>
		))}
	</ul>
);

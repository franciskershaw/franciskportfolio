const Sidebar = (props) => {
	return (
		<div className={`sidebar ${props.menuOpen && 'sidebar--active'}`}>
			<ul>
				<li onClick={() => props.setMenuOpen(false)}>
					<a href="#hero">Home</a>
				</li>
				<li onClick={() => props.setMenuOpen(false)}>
					<a href="#projects">Projects</a>
				</li>
				<li onClick={() => props.setMenuOpen(false)}>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	)
}

export default Sidebar;
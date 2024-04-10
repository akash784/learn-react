
import './Header.scss';

const TABS = {
    HOME : 'home',
    POSTS: 'posts',
    COMMENTS: 'comments',
    TODOS: 'todos'
}
export default function Header({changeTab, activeTab}) {
    function handleTab(e) {
        e.preventDefault();
        changeTab(e.target.id);
    }

    return (
        <>
            <div className="header">
                <div className="app-logo"></div>
                <div className="app-nav">
                    <a className={activeTab == TABS.HOME ? 'active' : ''} id={TABS.HOME} onClick={handleTab}>Home</a>
                    <a className={activeTab == TABS.POSTS ? 'active' : ''} id={TABS.POSTS}  onClick={handleTab}>Posts</a>
                    <a className={activeTab == TABS.COMMENTS ? 'active' : ''} id={TABS.COMMENTS}  onClick={handleTab}>Comments</a>
                    <a className={activeTab == TABS.TODOS ? 'active' : ''} id={TABS.TODOS} onClick={handleTab}>ToDos</a>
                </div>
            </div>
        </>
    );
}
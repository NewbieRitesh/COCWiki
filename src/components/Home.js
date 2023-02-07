export default function Home() {
    return (
        <>
            <div id="profile-data">
                <div className="profile btn btn-transperent btn-mid">Name and XP</div>
                <div id="trophie" className="btn btn-gold btn-mid">Trophie</div>
                <div id="inbox" className="btn btn-gold btn-mid">Inbox/mail</div>
            </div>
            <div id="chat" className="chat">Message or chats</div>

            <div id="armyandattack">
                <div id="army" className="btn btn-gold btn-mid">Army</div>
                <div id="attack" className="btn btn-gold btn-large">attack</div>
            </div>
            <div id="resources" className="resource-bar">
                <div id="gold">gold</div>
                <div id="eixier">eixier</div>
                <div id="dark-eixier">Dark</div>
                <div id="gems">Gems</div>
            </div>
            <div id="shopandmore">
                <div id="bases" className="btn btn-mid btn-white">bases</div>
                <div id="setting" className="btn btn-mid btn-white">Setting</div>
                <div id="shop" className="btn btn-large btn-white">Shop</div>
                <div id="news" className="btn btn-mid btn-white">News</div>
            </div>
        </>
    );
};

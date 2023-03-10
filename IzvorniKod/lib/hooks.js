// funkcija za provjeru nalazi li se upisan password u password blacklisti i ako da, onda se ne trazi promjena password-a
// password blacklist je popis najcesce koristenih passworda
export function useMyHooks() {
	const checkPasswordBlacklist = async (password) => {
        const file = await fetch("/password_blacklist.json");
        const blacklist = await file.json();
		if (blacklist.includes(password)) {
            console.log("password is in blacklist");
			return true;
		}
		return false;
	};

	return { checkPasswordBlacklist };
}

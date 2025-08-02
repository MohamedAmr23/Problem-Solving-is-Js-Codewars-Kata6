def order(words):
    if not words:
        return ""

    return " ".join(sorted(words.split(), key=lambda w: int("".join(filter(str.isdigit, w)))))


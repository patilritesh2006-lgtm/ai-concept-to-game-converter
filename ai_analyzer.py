def analyze_text(text, grade):
    """
    Rule-based AI (LLM-ready)
    """
    return {
        "concept": text[:200],
        "grade": grade,
        "learning_goal": f"Understand the core idea suitable for Class {grade}"
    }

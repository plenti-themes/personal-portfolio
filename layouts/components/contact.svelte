<script>
    export let title, line3, body, name, address, email, button, form;
</script>

<!-- contact section start -->
<section class="contact" id="contact">
    <div class="max-width">
        <h2 class="title">{title}</h2>
        <div class="contact-content">
            <div class="column left">
                <div class="text">{line3}</div>
                <p>{body}</p>
                <div class="icons">
                    <div class="row">
                        <i class="{name.icon}"></i>
                        <div class="info">
                            <div class="head">{name.heading}</div>
                            <div class="sub-title">{name.name}</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="{address.icon}"></i>
                        <div class="info">
                            <div class="head">{address.heading}</div>
                            <div class="sub-title">{address.location}</div>
                        </div>
                    </div>
                    <div class="row">
                        <i class="{email.icon}"></i>
                        <div class="info">
                            <div class="head">{email.heading}</div>
                            <div class="sub-title">{email.address}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column right">
                <div class="text">{form.title}</div>
                <form action="/">
                    <div class="fields">
                        <div class="field name">
                            <input type="text" placeholder="Name" required>
                        </div>
                        <div class="field email">
                            <input type="email" placeholder="Email" required>
                        </div>
                    </div>
                    <div class="field">
                        <input type="text" placeholder="Subject" required>
                    </div>
                    <div class="field textarea">
                        <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                    </div>
                    <div class="button-area">
                        <button type="submit">{button.title}</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

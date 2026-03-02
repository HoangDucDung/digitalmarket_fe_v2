<template>
    <div class="login-page">
        <div class="split-login">
            <div class="split-login__illustration">
                <div class="split-login__bg">
                    <div class="split-login__overlay"></div>
                    <div class="split-login__content-left">
                        <router-link to="/" class="split-login__logo-link">
                            <h2>DigiMarket</h2>
                        </router-link>
                        <p>Khám phá hệ sinh thái sản phẩm số chất lượng cao với giá ưu đãi cực tốt. Nâng tầm trải nghiệm
                            giải trí và làm việc của bạn.</p>
                    </div>
                </div>
            </div>

            <div class="split-login__form-wrapper">
                <div class="split-login__form-inner">
                    <h3 class="split-login__title">Đăng nhập</h3>
                    <p class="split-login__subtitle">Nhập thông tin của bạn để tiếp tục truy cập vào DigiMarket.</p>

                    <form class="login-form split-theme" @submit.prevent>
                        <AppInput v-model="form.email" type="email" label="Email" placeholder="Nhập địa chỉ email" />
                        <AppInput v-model="form.password" type="password" label="Mật khẩu"
                            placeholder="Nhập mật khẩu" />

                        <div class="login-form__actions">
                            <label class="login-form__checkbox">
                                <input type="checkbox" v-model="form.remember" />
                                <span>Ghi nhớ tôi</span>
                            </label>
                            <a href="#" class="login-form__forgot">Quên mật khẩu?</a>
                        </div>

                        <AppButton variant="primary" block size="lg" class="login-form__submit">
                            Đăng Nhập
                        </AppButton>
                    </form>

                    <div class="social-login">
                        <div class="social-login__divider">
                            <span>Đăng nhập qua dịch vụ</span>
                        </div>
                        <div class="social-login__buttons social-login__buttons--grid">
                            <AppButton variant="outline" class="social-btn social-btn--full" aria-label="Google">
                                <template #icon>
                                    <svg viewBox="0 0 24 24" width="20" height="20">
                                        <path fill="#EA4335"
                                            d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                                        <path fill="#4285F4"
                                            d="M12.545,10.239v3.821h5.445c-0.21,0.684-0.638,1.268-1.127,1.714l2.836,2.836C21.493,16.892,22.544,14.654,22.544,12c0-0.612-0.082-1.201-0.218-1.761H12.545z" />
                                        <path fill="#34A853"
                                            d="M12.545,22c5.524,0,10.002-4.477,10.002-10c0-0.612-0.082-1.201-0.218-1.761H22l-2.295-2.295l-1.996,1.996h0.038c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032c0-1.077,0.285-2.083,0.781-2.955l-2.81-2.81C3.21,5.263,2.543,8.473,2.543,12c0,5.523,4.478,10,10.002,10" />
                                        <path fill="#FBBC05"
                                            d="M12.545,2c-2.594,0-4.958,0.988-6.736,2.607l2.81,2.81C9.115,6.545,10.748,5.968,12.545,5.968c1.498,0,2.866,0.549,3.921,1.453l1.838-1.838l0.976-0.976C17.503,2.988,15.139,2,12.545,2z" />
                                    </svg>
                                </template>
                                Google
                            </AppButton>
                            <AppButton variant="outline" class="social-btn social-btn--full" aria-label="Facebook">
                                <template #icon>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="#1877F2">
                                        <path
                                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </template>
                                Facebook
                            </AppButton>
                            <!-- Apple Btn -->
                            <AppButton variant="outline" class="social-btn social-btn--full social-btn--span"
                                aria-label="Apple">
                                <template #icon>
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                        <path
                                            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm2.254 15.428c-.808 1.139-1.638 2.256-2.925 2.226-1.282-.026-1.7-.822-3.15-.822-1.454 0-1.92.797-3.154.846-1.284.053-2.227-1.189-3.037-2.359-1.65-2.385-2.91-6.721-1.228-9.645.835-1.45 2.34-2.38 3.99-2.404 1.256-.025 2.454.847 3.226.847.771 0 2.235-1.055 3.738-.894 1.586.166 2.924.976 3.743 2.18-.088.06-2.18 1.278-2.146 3.774.038 2.973 2.688 3.993 2.724 4.013-.024.084-.42 1.442-1.781 3.238zM14.07 6.137c.677-.822 1.132-1.968 1.006-3.116-1.002.043-2.193.673-2.887 1.494-.616.719-1.161 1.884-1.011 3.016 1.119.088 2.203-.574 2.892-1.394z" />
                                    </svg>
                                </template>
                                Apple
                            </AppButton>
                        </div>
                    </div>

                    <div class="login-page__footer" style="justify-content: flex-start; margin-top: 32px">
                        Chưa có tài khoản? <a href="#" class="login-page__signup">Đăng ký thành viên</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import AppInput from '@/components/base/input/AppInput.vue'
import AppButton from '@/components/base/Button/AppButton.vue'

const form = reactive({
    email: '',
    password: '',
    remember: false
})
</script>

<style scoped lang="scss">
.login-page {
    width: 100%;
    min-height: 100vh;
}

.split-login {
    display: flex;
    min-height: 100vh;
    background: $bg-card;

    @include respond-to('md') {
        flex-direction: column;
    }

    &__illustration {
        flex: 1;
        position: relative;
        overflow: hidden;

        @include respond-to('md') {
            min-height: 250px;
            flex: none;
        }
    }

    &__bg {
        position: absolute;
        inset: 0;
        background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: flex-end;
        padding: $space-3xl;

        @include respond-to('md') {
            padding: $space-xl;
        }
    }

    &__overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba($bg-dark, 0.4) 0%, rgba($primary-dark, 0.9) 100%);
    }

    &__content-left {
        position: relative;
        z-index: 2;

        .split-login__logo-link {
            text-decoration: none;
            display: inline-block;
        }

        h2 {
            font-family: $font-heading;
            font-size: $fs-4xl;
            color: white;
            font-weight: $fw-bold;
            margin-bottom: $space-sm;
            @include gradient-text;
        }

        p {
            color: rgba(255, 255, 255, 0.9);
            font-size: $fs-lg;
            line-height: $lh-relaxed;
            max-width: 480px;
        }
    }

    &__form-wrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: $space-2xl;
        background: $bg-card;
    }

    &__form-inner {
        width: 100%;
        max-width: 400px;
    }

    &__title {
        font-family: $font-heading;
        font-size: $fs-2xl;
        font-weight: $fw-bold;
        color: $text-primary;
        margin-bottom: $space-xs;
    }

    &__subtitle {
        color: $text-secondary;
        font-size: $fs-sm;
        margin-bottom: $space-xl;
    }
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: $space-md;

    &__actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: $space-sm;
    }

    &__checkbox {
        display: flex;
        align-items: center;
        gap: 8px;
        color: $text-secondary;
        font-size: $fs-sm;
        cursor: pointer;

        input {
            accent-color: $primary;
        }
    }

    &__forgot {
        color: $primary-light;
        font-size: $fs-sm;
        text-decoration: none;
        transition: color $transition-fast;

        &:hover {
            color: $primary;
            text-decoration: underline;
        }
    }

    &__submit {
        margin-top: $space-xs;
    }
}

// Social Login
.social-login {
    margin-top: $space-xl;

    &__divider {
        position: relative;
        text-align: center;
        margin-bottom: $space-md;

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 1px;
            background: $border-color;
        }

        span {
            position: relative;
            background: $bg-card; // This needs to match the card background
            padding: 0 $space-md;
            color: $text-muted;
            font-size: $fs-xs;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
    }

    &__buttons {
        display: flex;
        justify-content: center;
        gap: $space-md;

        &--grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
}

.social-btn {
    flex: 1;
    display: flex;
    justify-content: center;
    border-color: $border-color;
    color: $text-primary;
    background: transparent;

    &:hover {
        background: $bg-glass;
        border-color: rgba(255, 255, 255, 0.2);
    }

    &--full {
        gap: 8px;
    }

    &--span {
        grid-column: span 2;
    }
}

.login-page__footer {
    display: flex;
    font-size: $fs-sm;
    color: $text-secondary;
    gap: 6px;

    .login-page__signup {
        color: $secondary;
        font-weight: $fw-medium;
        text-decoration: none;
        transition: color $transition-fast;

        &:hover {
            color: $secondary-light;
        }
    }
}
</style>

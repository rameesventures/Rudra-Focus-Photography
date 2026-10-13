
"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  MessageCircle,
  Camera,
  CalendarDays,
  MapPin,
  UserRound,
  Mail,
  Heart,
} from "lucide-react";

export default function EstimatedForm() {
  const [today, setToday] = useState("");

  // Set the current date after the component mounts.
  // This avoids reading the current time during prerendering.
  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    setToday(`${year}-${month}-${day}`);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name")?.toString().trim();
    const phone = data.get("phone")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const service = data.get("event")?.toString();
    const date = data.get("date")?.toString();
    const location = data.get("location")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    // Replace with the client's WhatsApp number.
    // Country code included, without + or spaces.
    const whatsappNumber = "916374303448";

    if (!/^\d{10,15}$/.test(whatsappNumber)) {
      alert(
        "Please add the client's WhatsApp number in EstimatedForm.jsx."
      );
      return;
    }

    const enquiry = [
      "Hello Rudra Focus Photography! 📸",
      "",
      "I'd like to enquire about your photography services.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Photography Service: ${service}`,
      `Event Date: ${date || "Not decided yet"}`,
      `Event Location: ${location || "Not provided"}`,
      `Additional Details: ${message || "None"}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      enquiry
    )}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <Card className="w-full overflow-hidden rounded-3xl border border-border/70 bg-background/95 py-0 shadow-xl shadow-foreground/5">
      <CardContent className="p-5 sm:p-8 lg:p-10">
        {/* Form heading */}
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-secondary/60 px-3 py-1.5">
            <Heart className="size-3.5 text-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary-foreground">
              Let's Create Memories
            </span>
          </div>

          <h3 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
            Tell Us About Your
            <span className="mt-1 block text-primary">
              Special Day.
            </span>
          </h3>

          <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
            Planning a wedding, pre-wedding shoot or special celebration?
            Share your details and let's capture your story beautifully.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <UserRound className="size-4 text-primary" />
              Your Name <span className="text-primary">*</span>
            </Label>

            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              required
              className="h-12 rounded-xl border-border bg-background px-4 focus-visible:border-primary focus-visible:ring-primary/20"
            />
          </div>

          {/* Phone and email */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number <span className="text-primary">*</span>
              </Label>

              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+91 XXXXX XXXXX"
                required
                className="h-12 rounded-xl border-border bg-background px-4 focus-visible:border-primary focus-visible:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <Mail className="size-4 text-primary" />
                Email Address
              </Label>

              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="h-12 rounded-xl border-border bg-background px-4 focus-visible:border-primary focus-visible:ring-primary/20"
              />
            </div>
          </div>

          {/* Photography service */}
          <div className="space-y-2">
            <Label
              htmlFor="event"
              className="flex items-center gap-2 text-sm font-medium"
            >
              <Camera className="size-4 text-primary" />
              What Are We Capturing?{" "}
              <span className="text-primary">*</span>
            </Label>

            <select
              id="event"
              name="event"
              defaultValue=""
              required
              className="flex h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
            >
              <option value="" disabled>
                Choose your photography service
              </option>
              <option value="Wedding Photography">
                Wedding Photography
              </option>
              <option value="Pre-Wedding Photography">
                Pre-Wedding Photography
              </option>
              <option value="Candid Photography">
                Destination Wedding
              </option>
              <option value="Destination Wedding Photography">
                Birthday Photography
              </option>
              <option value="Engagement Photography">
                Coming-of-Age Photography
              </option>
              <option value="Baby Photography">
                Baby Photography
              </option>
              <option value="Birthday Photography">
                Event Photography
              </option>
              <option value="Folk and Cultural Photography">
                Folk Photography
              </option>
              <option value="Other Photography Service">
                Other Occasion
              </option>
            </select>
          </div>

          {/* Event date and location */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label
                htmlFor="date"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <CalendarDays className="size-4 text-primary" />
                Event Date
              </Label>

              <Input
                id="date"
                name="date"
                type="date"
                min={today || undefined}
                className="h-12 rounded-xl border-border bg-background px-4 [color-scheme:light] focus-visible:border-primary focus-visible:ring-primary/20"
              />
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="location"
                className="flex items-center gap-2 text-sm font-medium"
              >
                <MapPin className="size-4 text-primary" />
                Event Location
              </Label>

              <Input
                id="location"
                name="location"
                type="text"
                placeholder="Town, city or venue"
                autoComplete="address-level2"
                className="h-12 rounded-xl border-border bg-background px-4 focus-visible:border-primary focus-visible:ring-primary/20"
              />
            </div>
          </div>

          {/* Additional details */}
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium"
            >
              Tell Us More{" "}
              <span className="text-muted-foreground">(Optional)</span>
            </Label>

            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your event, preferred style or photography requirements..."
              className="min-h-28 resize-y rounded-xl border-border bg-background px-4 py-3 focus-visible:border-primary focus-visible:ring-primary/20"
            />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-md shadow-primary/10 transition-all hover:bg-primary/90"
          >
            Send Enquiry on WhatsApp
            <MessageCircle className="ml-2 size-4" />
          </Button>

          <p className="text-center text-xs leading-5 text-muted-foreground">
            Every beautiful story starts with a conversation.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
